export default function MainContent(props) {
    return (
        <div className={`main ${props.mode}`}>
         <h1>I want to learn React because..</h1>
        <ul>
            <li>I want to be more competent at the front-end </li>
            <li>It looks interesting and practical</li>
            <li>And many more reasons</li>
        </ul>
       </div> 
    )
}