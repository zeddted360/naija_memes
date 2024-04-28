export type LinkType = {
  path: String;
  title: String;
};

 export interface IUser {
   _id?: string;
   username: string;
   email: string;
   password: string;
   confirmPassword: string;
   createdAt?: Date;
   updatedAt?: Date;
 }

 export interface IPost {
   _id?: string;
   title: string;
   content: string;
   file?: FileList[];
   authorId: IUser['_id'];
   comments?: IComment['_id'][];
   likes?: IUser['_id'][];
   createdAt?: Date;
   updatedAt?: Date;
 }

 export interface IComment {
   _id?: String;
   comment: String;
   authorId: IUser['_id'];
   likes?: IUser['_id'];
   createdAt?: Date;
   updatedAt?: Date;
 }
