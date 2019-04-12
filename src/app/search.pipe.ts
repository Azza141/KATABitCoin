import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "SearchPipe" })
export class SearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    if (value) {
      let searchText = (args.query ? args.query.toLowerCase() : '');
      switch (args.filter) {
        case 'name': return value.filter(coin => {
          if (coin.name) {
            return coin.name.toLowerCase().search(searchText) !== -1;
          }
        });
        case 'id': return value.filter(coin => {
          if (coin.id) {
            return coin.id.toLowerCase().search(searchText) !== -1;
          }
        });
        case 'type': return value.filter(coin => {
          if (coin.type) {
            return coin.type.toLowerCase().search(searchText) !== -1;
          }
        });
        case 'code': return value.filter(coin => {
          if (coin.code) {
            return coin.code.toLowerCase().search(searchText) !== -1;
          }
        });
        default:
         return value.filter(coin => {
          if (coin.name) {
            return coin.name.toLowerCase().search(searchText) !== -1;
          }
        });
      }
    }
  }
}
