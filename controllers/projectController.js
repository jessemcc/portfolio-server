const projects = require("../data/projects.json");

exports.getAllProjects = (_req, res) => {
  try {
    const parsedData = projects.map((project) => {
      return {
        id: project.id,
        title: project.title,
        description: project.description,
        techs: project.techs,
        link: project.link,
        repo: project.repo,
        image: project.image,
      };
    });
    res.json(parsedData);
  } catch (error) {
    console.error(`Unable to retrieve information => ${error}`);
  }
};

exports.getProject = (req, res) => {
  try {
    const activeProject = projects.find((project) => {
      if (project.id === req.params.projectid) {
        return {
          id: project.id,
          title: project.title,
          description: project.description,
          techs: project.techs,
          link: project.link,
          repo: project.repo,
          image: project.image,
        };
      }
    });
    res.json(activeProject);
  } catch (error) {
    console.error(`Unable to retrieve information => ${error}`);
  }
};
