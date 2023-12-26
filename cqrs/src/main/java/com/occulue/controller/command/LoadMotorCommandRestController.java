/*******************************************************************************
  Turnstone Biologics Confidential
  
  2018 Turnstone Biologics
  All Rights Reserved.
  
  This file is subject to the terms and conditions defined in
  file 'license.txt', which is part of this source code package.
   
  Contributors :
        Turnstone Biologics - General Release
 ******************************************************************************/
package com.occulue.controller.command;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.occulue.api.*;
import com.occulue.delegate.*;
import com.occulue.entity.*;
import com.occulue.exception.*;
import com.occulue.projector.*;

import com.occulue.controller.*;

/** 
 * Implements Spring Controller command CQRS processing for entity LoadMotor.
 *
 * @author your_name_here
 */
@CrossOrigin
@RestController
@RequestMapping("/LoadMotor")
public class LoadMotorCommandRestController extends BaseSpringRestController {

    /**
     * Handles create a LoadMotor.  if not key provided, calls create, otherwise calls save
     * @param		LoadMotor	loadMotor
     * @return		CompletableFuture<UUID> 
     */
	@PostMapping("/create")
    public CompletableFuture<UUID> create( @RequestBody(required=true) CreateLoadMotorCommand command ) {
		CompletableFuture<UUID> completableFuture = null;
		try {       
        	
			completableFuture = LoadMotorBusinessDelegate.getLoadMotorInstance().createLoadMotor( command );
        }
        catch( Throwable exc ) {
        	LOGGER.log( Level.WARNING, exc.getMessage(), exc );        	
        }
		
		return completableFuture;
    }

    /**
     * Handles updating a LoadMotor.  if no key provided, calls create, otherwise calls save
     * @param		LoadMotor loadMotor
     * @return		CompletableFuture<Void>
     */
	@PutMapping("/update")
    public CompletableFuture<Void> update( @RequestBody(required=true) UpdateLoadMotorCommand command ) {
		CompletableFuture<Void> completableFuture = null;
		try {                        	        
			// -----------------------------------------------
			// delegate the UpdateLoadMotorCommand
			// -----------------------------------------------
			completableFuture = LoadMotorBusinessDelegate.getLoadMotorInstance().updateLoadMotor(command);;
	    }
	    catch( Throwable exc ) {
	    	LOGGER.log( Level.WARNING, "LoadMotorController:update() - successfully update LoadMotor - " + exc.getMessage());        	
	    }		
		
		return completableFuture;
	}
 
    /**
     * Handles deleting a LoadMotor entity
     * @param		command ${class.getDeleteCommandAlias()}
     * @return		CompletableFuture<Void>
     */
    @DeleteMapping("/delete")    
    public CompletableFuture<Void> delete( @RequestParam(required=true) UUID loadMotorId  ) {
    	CompletableFuture<Void> completableFuture = null;
		DeleteLoadMotorCommand command = new DeleteLoadMotorCommand( loadMotorId );

    	try {
        	LoadMotorBusinessDelegate delegate = LoadMotorBusinessDelegate.getLoadMotorInstance();

        	completableFuture = delegate.delete( command );
    		LOGGER.log( Level.WARNING, "Successfully deleted LoadMotor with key " + command.getLoadMotorId() );
        }
        catch( Throwable exc ) {
        	LOGGER.log( Level.WARNING, exc.getMessage() );
        }
        
        return completableFuture;
	}        
	



//************************************************************************    
// Attributes
//************************************************************************
    protected LoadMotor loadMotor = null;
    private static final Logger LOGGER = Logger.getLogger(LoadMotorCommandRestController.class.getName());
    
}
