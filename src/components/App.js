import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }
    state = {images : []};

    async onSearchSubmit(term){
        const response = await unsplash.get('search/photos',{
            params : { query : term },
           
        });
        this.setState({images : response.data.results});
    }

    render(){
        const images = this.state.images;
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found {images.length} images.
                <ImageList images={images}/>
            </div>
        );
    }
}

export default App;
