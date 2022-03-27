package com.institucion.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.institucion.excepciones.ResourceNotFoundException;
import com.institucion.entidades.Grado;
import com.institucion.repositorio.GradoRepositorio;



@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200/")
public class GradoControlador {
	
	@Autowired
    private GradoRepositorio repositorio;
	
	@GetMapping("/grados")
    public List<Grado> listarTodosLosGrados(){
        return repositorio.findAll();
    }
	
	@GetMapping("/grados/{id}")
	public ResponseEntity<Grado> obtenerGradoPorId(@PathVariable Long id){
		Grado grado = repositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException(("No existe el empleado con el ID" + id)));
    	return ResponseEntity.ok(grado);
	}
	
	@PostMapping("/grados")
    public Grado guardarGrado(@RequestBody Grado grado) {
    	return repositorio.save(grado);
    }
	
	@PutMapping("/grados/{id}")
	public ResponseEntity<Grado> actualizarGrado(@PathVariable Long id,@RequestBody Grado detallesGrado){
    	Grado grado = repositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException(("No existe el empleado con el ID" + id)));
    	grado.setDescripcion(detallesGrado.getDescripcion());
    	Grado gradoActualizado = repositorio.save(grado);
    	return ResponseEntity.ok(grado);
    }
	
	@DeleteMapping("/grados/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarGrado(@PathVariable Long id){
    	Grado grado = repositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException(("No existe el empleado con el ID" + id)));
    	repositorio.delete(grado);
    	Map<String, Boolean> respuesta = new HashMap<>();
    	respuesta.put("eliminar",Boolean.TRUE);
    	return ResponseEntity.ok(respuesta);
    }
}
