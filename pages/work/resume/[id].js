import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllResumesPath, getResumeData } from '../../../lib/getResumedata.js';
import BaseContainer from '../../../components/Containers/BaseContainer'

const components = {

}

export default function Blog({ ResumeMetadata, ResumeContent }) {
    return (
        <div className="text-white flex-col items-center justify-center min-h-screen bg-black">
          <Head>
            <title>{ResumeMetadata.title} | Lachlan Kemp</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <BaseContainer>
            <div className = 'prose pt-7'>
              <MDXRemote {...ResumeContent} components = {components} /> 
            </div>     
          </BaseContainer>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllResumesPath();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const ResumeData = await getResumeData(params.id);
    const mdxSource = await serialize(ResumeData.content);
    return {
        props: {
            ResumeMetadata: ResumeData.metadata,
            ResumeContent: mdxSource,
            id: params.id,
        }
    }
}
