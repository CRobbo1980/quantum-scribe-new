export enum TaskStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    assigneeId?: string;
    projectId: string;
    createdAt: Date;
    updatedAt: Date;
}
