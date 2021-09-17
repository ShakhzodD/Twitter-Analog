import React from 'react';

export default class PostStatusFilter extends React.Component{
    constructor(props){
        super(props);
        this.buttons=[
            {name:"all", label:"All"},
            {name:"like", label:"Liked"}
        ]
    }

    render(){
        const buttons=this.buttons.map(({name, label})=>{
         const avtive=this.props.filter===name;
         const clazz=avtive ? "btn-info" : "btn-outline-secondary"
            return (
                <button key={name} 
                type="button" 
                className={`btn ${clazz}`}
                onClick={()=>this.props.onFilterSelect(name)}>
                    {label}
                </button>
            )
        });
        return (
            <div className="btn-group">
            {buttons}
            </div>
        );
    }

};