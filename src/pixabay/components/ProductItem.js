import React from "react";

function ProductItem({ hit }) {

  return (
    <div className="content-list_item">
      <a href={hit.pageURL} target="_blank">
        <img
          className="list_item-img"
          src={hit.previewURL}
          alt={hit.type}
          height={hit.previewHeight}
          width={hit.previewWidth}
        />
      </a>
      <div className="content-list_item-filling">
        <h2 className="content-list_item-text">Author : {hit.user}</h2>
        <h2 className="content-list_item-text">Comments : {hit.comments}</h2>
        <ul className="tags-list">
          {hit.tags.split(",").map((e) => (
            <li className="tag-list_item" key={e}>
              {e}
            </li>
          ))}
        </ul>
        <div className="list-item_rating">
          <p className="item_rating-item like">{hit.likes}</p>
          <p className="item_rating-item downloads">{hit.downloads}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
