import { Issue, Project } from './types';

export interface ProjectRepository {
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project>;
  getIssuesForProject(projectId: number): Promise<Issue[]>;
  getIssue(issueId: number): Promise<Issue>;
}

export class RoadieProjectRepository implements ProjectRepository {
  async getProject(id: number): Promise<Project> {
    const data = await import('./projects.json');
    return data.projects[id];
  }

  async getIssuesForProject(projectId: number): Promise<Issue[]> {
    const data = await import('./projects.json');
    const issues: Issue[] = data.projects[projectId].issues;
    return issues;
  }

  async getIssue(issueId: number): Promise<Issue> {
    const data = await import('./projects.json');
    const issue: Issue = data.projects[0].issues[issueId];
    return issue;
  }

  async getProjects(): Promise<Project[]> {
    const data = await import('./projects.json');
    return data.projects;
  }
}
