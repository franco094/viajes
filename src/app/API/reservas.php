<?php

require_once 'conexion.php';

class Reservas{

    //INSERTAR UNA RESERVA
    public static function reservasInsertar($nombre, $apellido, $dni, $destino, $fecha, $pasajeros, $correo){
        $base = new Conexion();
        $consulta = "INSERT INTO reservas (nombre, apellido, dni, destino, fecha, pasajeros, correo)
            VALUES ('".$nombre."', '".$apellido."', '".$dni."', '".$destino."', '".$fecha."', ".$pasajeros.", '".$correo."')";
        $base->query($query);
        
        if ($base->affected_rows) {
            return TRUE;
        }
        return FALSE;
    }

    //BORRAR UNA RESERVA
    public static function reservasBorrar($id_reserva){
        $base = new Conexion();
        $consulta = "DELETE * FROM reservas WHERE id_reserva=$id_reserva";
        $base->query($consulta);
        if ($base->affected_rows) {
            return TRUE;
        }
        return FALSE;
    }

    //MODIFICAR UNA RESERVA
    public static function reservasModificar($id_reserva, $nombre, $apellido, $dni, $destino, $fecha, $pasajeros, $correo){
        $base = new Conexion();
        $consulta = "UPDATE reservas SET
            nombre='".$nombre."', apellido='".$apellido."', dni='".$dni."', destino='".$destino."', fecha='".$fecha."', pasajeros=".$pasajeros.", '".$correo."'
            WHERE id_reserva=$id_reserva";
        $base->query($consulta);
        
        if ($base->affected_rows) {
            return TRUE;
        }
        return FALSE;
    }

    //CONSULTAR UNA RESERVA
    public static function reservasConsultar($id_reserva){
        $base = new Conexion();
        $consulta = "SELECT * FROM reservas WHERE id_reserva=$id_reserva";
        $resultado = $base->query($consulta);
        $datos = [];

        if($resultado->num_rows){
            while($row = $resultado -> fetch_assoc()){
                $datos[] = [
                    'id_reserva'=>$row['id_reserva'],
                    'nombre'=>$row['nombre'],
                    'apellido'=>$row['apellido'],
                    'dni'=>$row['dni'],
                    'destino'=>$row['destino'],
                    'fecha'=>$row['fecha'],
                    'pasajeros'=>$row['pasajeros'],
                    'correo'=>$row['correo']
                ];
            }
            return $datos;
        }
        return $datos;
    }

    //LISTAR RESERVAS
    public static function reservasListar(){
        $base = new Conexion();
        $consulta = "SELECT * FROM reservas";
        $resultado = $base->query($consulta);
        $datos = [];

        if($resultado->num_rows){
            while($row = $resultado -> fetch_assoc()){
                $datos[] = [
                    'id_reserva'=>$row['id_reserva'],
                    'nombre'=>$row['nombre'],
                    'apellido'=>$row['apellido'],
                    'dni'=>$row['dni'],
                    'destino'=>$row['destino'],
                    'fecha'=>$row['fecha'],
                    'pasajeros'=>$row['pasajeros'],
                    'correo'=>$row['correo']
                ]
            }
            return $datos;
        }
        return $datos;
    }

}

?>