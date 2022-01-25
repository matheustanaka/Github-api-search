import React, { useState } from "react";

import { ButtonSearch } from "./ButtonSearch";

export function InputSearch() {
    const [search, setSearch] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const storage = (username = "string", value = "string") => {
            localStorage.setItem(username, value);
        };

        storage("username", search);
    }
    return (
        <div className="input-search">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="inputSearch"
                    value={search}
                    placeholder="Type text here"
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
                <ButtonSearch />
            </form>

        </div>
    )
}