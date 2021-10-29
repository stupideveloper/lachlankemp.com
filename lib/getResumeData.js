const fs = require('fs');
const path = require('path');
const matter = require("gray-matter");

// current 'Resumes' directory
const ResumesDirectory = path.join(process.cwd(), 'Resumes');
const mdx_file_extention = '.mdx';

function getAllFilesInDirectory() {
  const fileNames = fs.readdirSync(ResumesDirectory);
  return fileNames.map((fileName) => {
    return path.parse(fileName)
  })
}

function getMdxFiles() {
  const allFiles = getAllFilesInDirectory();
  return allFiles.filter(parsedFile => parsedFile.ext == mdx_file_extention);
}

export function getAllResumesPath() {
  const allMdxFiles = getMdxFiles();
  return allMdxFiles.map((parsedFile) => {
    return {
      params: {
        id: parsedFile.name
      }
    }
  })
}

export function getResumesMetaData() {
  const allMdxFiles = getMdxFiles();

  const ResumesMetaData = allMdxFiles.map((parsedFile) => {
    const fullPath = path.join(ResumesDirectory, parsedFile.base);

    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // get metadata, content
    const { data, content } = matter(fileContents);
    let metadata = data;
    metadata['id'] = parsedFile.name;
    return metadata;
  });
  return ResumesMetaData;
}

export function getResumeData(id) {
  const fullPath = path.join(ResumesDirectory, id + mdx_file_extention);

  // get MDX metadata and content
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // get metadata, content
  const { data, content } = matter(fileContents);

  let metadata = data;
  metadata['id'] = id;

  return {'metadata': metadata, 'content': content};
}