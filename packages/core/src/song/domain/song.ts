import { IAlbumBase } from '../../album/domain/album';
import { IUserBase } from '../../user/domain/user';

export interface ISongBase {
  addedAt: Date;
  album: IAlbumBase;
}

export interface ISong {
  addedBy: IUserBase;
}

export interface ISongList {
  data: ISongBase[];
  total: number;
}
