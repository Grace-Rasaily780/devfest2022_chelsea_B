import React from 'react';
import './Program.css';

function Program() {
  var data = [
    {   
        img: 'img_1.jpg',
        title: 'Awareness',
        para: 'We educate both normal and differenlty abled people about the challenges differenlty abled people face in daily lives and educate normal people to accpet them as a part of the society.'
    },
    {  
        img: 'img_2.jpg',
        title: 'Training',
        para: 'We train different abled people to deal with problem that they need to face in personal, professional and social life.'
    },
    {   
        img: 'img_3.jpg',
        title: 'Job Oppournity',
        para: 'We provide job oppournity to different abled people inorder for them to gain confidence and to excel in life.'
    },
    {  
        img: 'img_4.jpg',
        title: 'Funding',
        para: 'We fund differently abled people who need funds their treatments and to live their lives, if they lack financial stability.'
    }
  ]
  return (
    <div className="program" id="program">
        {
            data.map((program, index) => (
                <div className="program_container" key={index}>
                    <img src={`/assets/program/${program.img}`} alt="" />
                    <div className="program_content">
                        <p className="program_title">{program.title}</p>
                        <p className="program_para">{program.para}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Program;