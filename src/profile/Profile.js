import React from 'react'
import propTypes from 'prop-types';

function Profile({fullName,bio,profession}) {

const handleName=()=>{
    alert(fullName);
            }

    
    return (
        <div>
            <button onClick={handleName}>Click Me !!</button>
            <h2>{fullName}
            <img className="profileimg" width="300" alt="me" src ="https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-9/123918274_1583452781852793_5655223741863063741_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=C0C9lfrG5e8AX9wD2Ik&_nc_ht=scontent.fnbe1-1.fna&oh=bf77664487883a6d04d5e5bd97aa8729&oe=601B82D3">
            </img>
                </h2>
            <h2>{bio}</h2>
            <h2>{profession}</h2>
        </div>
    )
}


export default Profile

Profile.defaultProps={
    profession:"Student"
};

Profile.propTypes={
    fullName : propTypes.string,
    profession : propTypes.string,
    bio: propTypes.string
}