/*
 * Copyright 2020 Larder Software Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Logger } from 'winston';
import { ProjectRepository } from './projectRepository';
import { Issue, Project } from './types';

interface ProjectsStoreOptions {
  logger: Logger;
  projectRepository: ProjectRepository;
}

export class ProjectsStore {
  private readonly logger: Logger;
  private readonly projectRepository: ProjectRepository;

  constructor(options: ProjectsStoreOptions) {
    this.logger = options.logger;
    this.projectRepository = options.projectRepository;
  }

  getProject = async (id: number): Promise<Project> => {
    this.logger.info('Retrieving project from repository');
    const project = (await this.projectRepository.getProject(
      id - 1,
    )) as Project;
    return project;
  };

  getIssuesForProject = async (projectId: number): Promise<Issue[]> => {
    this.logger.info('Retrieving IssuesForProject from repository');
    const projects = (await this.projectRepository.getIssuesForProject(
      projectId - 1,
    )) as Issue[];
    return projects;
  };

  getIssue = async (issueId: number): Promise<Issue> => {
    this.logger.info('Retrieving issue from repository');
    const projects = (await this.projectRepository.getIssue(issueId)) as Issue;
    return projects;
  };

  getProjects = async (): Promise<Project[]> => {
    this.logger.info('Retrieving projects from repository');
    const projects = (await this.projectRepository.getProjects()) as Project[];
    return projects;
  };
}
