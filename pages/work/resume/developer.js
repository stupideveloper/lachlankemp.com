import Head from 'next/head'
import BaseContainer from '/components/Containers/BaseContainer'
import ReactMarkdown from 'react-markdown'
import React from 'react'

const markdown = `
# Developer Resume

## Contact  
Lachlan Kemp  
(+61) 444 502 950  
me@lachlankemp.com    

## Experience & Activities

### First Robotics
Worked collaboratively in a fast paced, 20 member team to develop and drive an advanced nationally recognised [FIRST Robotics](https://www.firstinspires.org/robotics/frc) robot.

### Vex Robotics
Created a VEX robot in a small, tight-nit group to develop a globally competitive robotics platform.

### Side Projects
Has developed numerous Javascript, React and Svelte Based applications (found on [GitHub](https://github.com/widelachie)) with peers.

## Skills and abilities
- Javascript
- NodeJS
- Git Management
- Adobe Creative Cloud Suite (includes: AI, PS, ID)
- Collaboration in small teams 
- Problem-solving within a group

For a far more detailed resume, contact me at me@lachlankemp.com

`

export default function TestPage() {
  return (
    <div className="dark:text-white dark:bg-black flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Dev Resume | Lachlan Kemp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseContainer>
        <div className = 'prose dark:prose-dark pt-7'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </BaseContainer>
    </div>
  )
}
