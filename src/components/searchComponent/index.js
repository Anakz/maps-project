import React from 'react'
import {SearchContainer,
        SearchWrap,
        SearchH1,
        InputLat,
        InputLong,
        SearchMenu,
        SearchItems } from './SearchElements'

const SearchComponent = () => {
    return (
            <SearchContainer >
                <SearchWrap >
                    <SearchH1>please enter latitude and longitude </SearchH1>

                    <SearchMenu>
                        <SearchItems>
                            <InputLat defaultValue="@"  />
                        </SearchItems>
                        <SearchItems>
                            <InputLong defaultValue="@"  />
                        </SearchItems>
                        
                    </SearchMenu>
                </SearchWrap>
            </SearchContainer>
    )
}

export default SearchComponent
