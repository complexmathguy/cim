import React, { Component } from 'react'
import ExcIEEEDC3AService from '../services/ExcIEEEDC3AService';

class UpdateExcIEEEDC3AComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
                efd1: '',
                efd2: '',
                exclim: '',
                ke: '',
                kv: '',
                seefd1: '',
                seefd2: '',
                te: '',
                trh: '',
                vrmax: '',
                vrmin: ''
        }
        this.updateExcIEEEDC3A = this.updateExcIEEEDC3A.bind(this);

        this.changeefd1Handler = this.changeefd1Handler.bind(this);
        this.changeefd2Handler = this.changeefd2Handler.bind(this);
        this.changeexclimHandler = this.changeexclimHandler.bind(this);
        this.changekeHandler = this.changekeHandler.bind(this);
        this.changekvHandler = this.changekvHandler.bind(this);
        this.changeseefd1Handler = this.changeseefd1Handler.bind(this);
        this.changeseefd2Handler = this.changeseefd2Handler.bind(this);
        this.changeteHandler = this.changeteHandler.bind(this);
        this.changetrhHandler = this.changetrhHandler.bind(this);
        this.changevrmaxHandler = this.changevrmaxHandler.bind(this);
        this.changevrminHandler = this.changevrminHandler.bind(this);
    }

    componentDidMount(){
        ExcIEEEDC3AService.getExcIEEEDC3AById(this.state.id).then( (res) =>{
            let excIEEEDC3A = res.data;
            this.setState({
                efd1: excIEEEDC3A.efd1,
                efd2: excIEEEDC3A.efd2,
                exclim: excIEEEDC3A.exclim,
                ke: excIEEEDC3A.ke,
                kv: excIEEEDC3A.kv,
                seefd1: excIEEEDC3A.seefd1,
                seefd2: excIEEEDC3A.seefd2,
                te: excIEEEDC3A.te,
                trh: excIEEEDC3A.trh,
                vrmax: excIEEEDC3A.vrmax,
                vrmin: excIEEEDC3A.vrmin
            });
        });
    }

    updateExcIEEEDC3A = (e) => {
        e.preventDefault();
        let excIEEEDC3A = {
            excIEEEDC3AId: this.state.id,
            efd1: this.state.efd1,
            efd2: this.state.efd2,
            exclim: this.state.exclim,
            ke: this.state.ke,
            kv: this.state.kv,
            seefd1: this.state.seefd1,
            seefd2: this.state.seefd2,
            te: this.state.te,
            trh: this.state.trh,
            vrmax: this.state.vrmax,
            vrmin: this.state.vrmin
        };
        console.log('excIEEEDC3A => ' + JSON.stringify(excIEEEDC3A));
        console.log('id => ' + JSON.stringify(this.state.id));
        ExcIEEEDC3AService.updateExcIEEEDC3A(excIEEEDC3A).then( res => {
            this.props.history.push('/excIEEEDC3As');
        });
    }

    changeefd1Handler= (event) => {
        this.setState({efd1: event.target.value});
    }
    changeefd2Handler= (event) => {
        this.setState({efd2: event.target.value});
    }
    changeexclimHandler= (event) => {
        this.setState({exclim: event.target.value});
    }
    changekeHandler= (event) => {
        this.setState({ke: event.target.value});
    }
    changekvHandler= (event) => {
        this.setState({kv: event.target.value});
    }
    changeseefd1Handler= (event) => {
        this.setState({seefd1: event.target.value});
    }
    changeseefd2Handler= (event) => {
        this.setState({seefd2: event.target.value});
    }
    changeteHandler= (event) => {
        this.setState({te: event.target.value});
    }
    changetrhHandler= (event) => {
        this.setState({trh: event.target.value});
    }
    changevrmaxHandler= (event) => {
        this.setState({vrmax: event.target.value});
    }
    changevrminHandler= (event) => {
        this.setState({vrmin: event.target.value});
    }

    cancel(){
        this.props.history.push('/excIEEEDC3As');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update ExcIEEEDC3A</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> efd1: </label>
                                            #formFields( $attribute, 'update')
                                            <label> efd2: </label>
                                            #formFields( $attribute, 'update')
                                            <label> exclim: </label>
                                            #formFields( $attribute, 'update')
                                            <label> ke: </label>
                                            #formFields( $attribute, 'update')
                                            <label> kv: </label>
                                            #formFields( $attribute, 'update')
                                            <label> seefd1: </label>
                                            #formFields( $attribute, 'update')
                                            <label> seefd2: </label>
                                            #formFields( $attribute, 'update')
                                            <label> te: </label>
                                            #formFields( $attribute, 'update')
                                            <label> trh: </label>
                                            #formFields( $attribute, 'update')
                                            <label> vrmax: </label>
                                            #formFields( $attribute, 'update')
                                            <label> vrmin: </label>
                                            #formFields( $attribute, 'update')
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateExcIEEEDC3A}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateExcIEEEDC3AComponent
