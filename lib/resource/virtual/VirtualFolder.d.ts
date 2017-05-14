import { IResource, SimpleCallback, ReturnCallback, ResourceType } from '../IResource';
import { ResourceChildren } from '../std/ResourceChildren';
import { VirtualResource } from './VirtualResource';
import { FSManager } from '../../manager/FSManager';
export declare class VirtualFolder extends VirtualResource {
    children: ResourceChildren;
    constructor(name: string, parent?: IResource, fsManager?: FSManager);
    type(callback: ReturnCallback<ResourceType>): void;
    append(data: Int8Array, callback: SimpleCallback): void;
    write(data: Int8Array, callback: SimpleCallback): void;
    read(callback: ReturnCallback<Int8Array>): void;
    mimeType(callback: ReturnCallback<string>): void;
    size(callback: ReturnCallback<number>): void;
    addChild(resource: IResource, callback: SimpleCallback): void;
    removeChild(resource: IResource, callback: SimpleCallback): void;
    getChildren(callback: ReturnCallback<IResource[]>): void;
}