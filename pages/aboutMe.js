import Meta from '../components/Meta'

const aboutMe = () => {
    return (
        <div>
           <h1 style={{paddingLeft: 20}}>This is about me, Brian Elias Montellano</h1>
           <ul> 
               <li>Currently listening to sick traxx</li>
               <li>Spotify Discover Weekly has my algorithm on LOCK</li>
           </ul> 
        </div>
    )
}

//MUST EXPORT OR GET ERROR: The default export is not a React Component in page: "/aboutMe"
export default aboutMe