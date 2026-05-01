import { Component } from "react";

export default class CourseBadgeClass extends Component {
     render() {
        const { code, level } = this.props;
         
        return ( 
            <span className="course-badge"> 
                {code} - Level {level}
            </span> 
        );
    }
}