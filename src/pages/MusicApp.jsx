import React from 'react'
import { DataProvider } from "../contexts/DataProvider";
import Searchbar from '../components/Searchbar'
import Song from '../components/Song'

function MusicApp() {
    return (
        <div>
            <h1>Music App</h1>
            <DataProvider>
            <Searchbar />
            <Song />
            </DataProvider>
        </div>
    )
}

export default MusicApp
