import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const {
    githubState,
    getUser,
    getUserRepos,
    getUserStarred,
    getFavoriteUsers,
  } = useContext(GithubContext);

  return {
    githubState,
    getUser,
    getUserRepos,
    getUserStarred,
    getFavoriteUsers,
  };
};

export default useGithub;
