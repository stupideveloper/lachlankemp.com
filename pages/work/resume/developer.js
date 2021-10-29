import Head from 'next/head'
import BaseContainer from '../../../components/Containers/BaseContainer'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'


const components = {  }

export default function TestPage({ source }) {
  return (
    <div className="text-white flex-col items-center justify-center min-h-screen bg-black">
      <Head>
        <title>Dev Resume | Lachlan Kemp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseContainer>
        <div className = 'prose pt-7'>
        <MDXRemote {...source} components={components} />
        </div>
      </BaseContainer>
    </div>
  )
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `
    
    # Developer Resume

    ## Contact  
    Lachlan Kemp  
    (+61) 444 502 950  
    me@lachlankemp.com    

    ## Experience & Activities

    ### First Robotics
    Worked collaboratively in a fast paced, 20 member team to develop and drive an advanced nationally recognised [FIRST Robotics](https://www.firstinspires.org/robotics/frc) robot using metal manufacturing and custom robot software.

    ### Vex Robotics
    Created a VEX robot in a small, tight-nit group to develop a globally competitive robotics platform.

    ### Side Projects
    Has developed numerous Javascript, React and Svelte Based applications (found on [GitHub](https://github.com/widelachie)) with peers.

    ## Skills and abilities
    - Javascript
    - NodeJS
    - Git Management
    - Adobe Creative Cloud Suite (includes: AI, PS, ID)
    - Accepting constructive criticism
    - Collaboration in teams
    - Problem-solving within a group

    For a far more detailed resume, contact me at me@lachlankemp.com
  `
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}
