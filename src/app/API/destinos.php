<?php

require_once 'conexion.php';

class Destinos{

    //INSERTAR UN DESTINO
    public static function destinosInsertar($nombre_destino, $fecha){
        $base = new Conexion();
        $consulta = "INSERT INTO destinos (nombre_destino, fecha)
            VALUES ('".$nombre_destino."', '".$fecha."')";
        $base->query($query);
        
        if ($base->affected_rows) {
            return TRUE;
        }
        return FALSE;
    }

    //BORRAR UN DESTINO
    public static function destinosBorrar($id_destino){
        $base = new Conexion();
        $consulta = "DELETE * FROM destinos WHERE id_destino=$id_destino";
        $base->query($consulta);
        if ($base->affected_rows) {
            return TRUE;
        }
        return FALSE;
    }

    //MODIFICAR UN DESTINO
    public static function destinosModificar($id_destino, $nombre_destino, $fecha){
        $base = new Conexion();
        $consulta = "UPDATE destinos SET
            nombre_destino='".$nombre_destino."', fecha='".$fecha."'
            WHERE id_destino=$id_destino";
        $base->query($consulta);
        
        if ($base->affected_rows) {
            return TRUE;
        }
        return FALSE;
    }

    //CONSULTAR UN DESTINO
    public static function destinosConsultar($id_destino){
        $base = new Conexion();
        $consulta = "SELECT * FROM destinos WHERE id_destino=$id_destino";
        $resultado = $base->query($consulta);
        $datos = [];

        if($resultado->num_rows){
            while($row = $resultado -> fetch_assoc()){
                $datos[] = [
                    'id_destino'=>$row['id_destino'],
                    'nombre_destino'=>$row['nombre_destino'],
                    'fecha'=>$row['fecha']
                ];
            }
            return $datos;
        }
        return $datos;
    }

    //LISTAR DESTINOS
    public static function destinosListar(){
        $base = new Conexion();
        $consulta = "SELECT * FROM destinos";
        $resultado = $base->query($consulta);
        $datos = [];

        if($resultado->num_rows){
            while($row = $resultado -> fetch_assoc()){
                $datos[] = [
                    'id_destino'=>$row['id_destino'],
                    'nombre_destino'=>$row['nombre_destino'],
                    'fecha'=>$row['fecha']
                ]
            }
            return $datos;
        }
        return $datos;
    }

}

?>