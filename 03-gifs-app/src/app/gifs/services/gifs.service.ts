import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

// const GIPHI_API_KEY = '8mhVOjXZ9EgBi9wj1OAAuygY9e9qXUIJ';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey:       string = '8mhVOjXZ9EgBi9wj1OAAuygY9e9qXUIJ';
  private serviceUrl:   string = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  get tagHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldtag) => oldtag != tag);
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  public searchTag( tag: string ):void {
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search?`,{params})
      .subscribe (resp => {
        this.gifList = resp.data;
      });
  }

}
