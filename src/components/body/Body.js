import React , {Component} from 'react';
import Section from './Section';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = ({
            showForm: false,
            sections : [
                {id: 'a', linkImage:'img/01.jpg',title:'For those about', content: 'Lorem ipsum dolor sit amet, consectetur ',showSaveForm: false },
                {id: 'b',linkImage:'img/02.jpg',title:'For those about', content: 'Lorem ipsum dolor sit amet, consectetur ',showSaveForm: false},
                {id: 'c',linkImage:'img/03.jpg',title:'For those about', content: 'Lorem ipsum dolor sit amet, consectetur ',showSaveForm: false },
                {id: 'd',linkImage:'img/03.jpg',title:'For those about', content: 'Lorem ipsum dolor sit amet, consectetur ',showSaveForm: false },
                {id: 'e', linkImage:'img/01.jpg',title:'For those about', content: 'Lorem ipsum dolor sit amet, consectetur ',showSaveForm: false },
                {id: 'f',linkImage:'img/02.jpg',title:'For those about', content: 'Lorem ipsum dolor sit amet, consectetur ',showSaveForm: false},
                {id: 'g',linkImage:'img/03.jpg',title:'For those about', content: 'Lorem ipsum dolor sit amet, consectetur ',showSaveForm: false },
                {id: 'h',linkImage:'img/03.jpg',title:'For those about', content: 'Lorem ipsum dolor sit amet, consectetur ',showSaveForm: false },
                {id: 'i',linkImage:'img/03.jpg',title:'For those about', content: 'Lorem ipsum dolor sit amet, consectetur ',showSaveForm: false }
            ]
        })
        
    }
    findSection(id){
        let  sectionIndex = this.state.sections.findIndex(el =>{
            return el.id === id;
       });
       let section = {...this.state.sections[sectionIndex]};
       return {section, sectionIndex};
    }

    reWriteSectionAfterModify(section, sectionIndex){
        const newSections = [...this.state.sections];
        newSections[sectionIndex] = section; //change value of sections.
        this.setState({ sections: newSections});
    }

    toggleForm(id){
        const {section, sectionIndex} = this.findSection(id);
       //changing the value which we wanted
       section.showSaveForm = !section.showSaveForm;
       //modifying state.
       this.reWriteSectionAfterModify(section, sectionIndex);
    }

    changeText(event, id){
        const {section, sectionIndex} = this.findSection(id);
        //changing the value which we wanted
        section.title = event.target.value;
        //modifying state.
        this.reWriteSectionAfterModify(section, sectionIndex);
    }
    finishEnterTextHandler(event,id){
        if(event.key === "Enter"){
            this.toggleForm(id);
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                {
                    this.state.sections.map((section)=>{
                        return <Section 
                        linkImage= {section.linkImage}
                        h2_Content={section.title}
                        p_Content={section.content}
                        key={section.id}
                        onClickToggleSaveForm= {()=>this.toggleForm(section.id)}
                        checkShowForm={section.showSaveForm}
                        changeText = {(event)=>this.changeText(event,section.id)}
                        finishEnterText={(event)=> this.finishEnterTextHandler(event, section.id)}/>
                    })
                }
                    
            </div>
          </div>
        );
    }
}
export default Body;