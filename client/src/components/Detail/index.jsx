import { useEffect, useState } from 'react';

import {
  useParams,
  Link
} from 'react-router-dom';

import editorChoiceImg from '../../assets/img/editor_choice.webp';
import personImg from '../../assets/img/person.png';

import RatingStar from '../commons/RatingStar';
import Overlay from '../commons/Overlay';

const Detail = () => {
  let { appid } = useParams();
  const [detail, setDetail] = useState({});
  const [showOverlay, setOvetlay] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
    let fetchData = async () => {
      setOvetlay(true);

      try {
        let res = await fetch(`/api/details/${appid}`);
        let json = await res.json();
        setDetail(json);
      } catch (e) {
        console.log(e);
      }
      setOvetlay(false);
    }
    fetchData(); // eslint-disable-next-line
  }, [])

  return (
    <>
      {showOverlay ? <Overlay /> :
        <div className="detail">
          <DetailHeader {...detail} />
          <DetailScreenShots screenshots={detail.screenshots} />
          <DetailDescription descriptionHTML={detail.descriptionHTML} />
        </div>
      }
    </>
  );
}

const DetailHeader = (props) => {
  const {
    icon,
    title,
    developer,
    genre,
    contentRating,
    editorsChoice,
    score,
    ratings,
    url
  } = props;
  return (
    <div className="detail__header">
      <div className="detail__info">
        <img src={icon} alt="" width="200px" height="200px" />
        <div className="info__des">
          <p>{title}</p>
          <div className="info__link">
            <Link to="/">{developer}</Link>
            <Link to="/">{genre}</Link>
          </div>
          <p>For: {contentRating}</p>
        </div>

        <div className="info__right">
          {editorsChoice && (
            <div className="info__editorchoice">
              <img src={editorChoiceImg} alt="" />
              <span>Editor Choice</span>
            </div>
          )}

          <div className="info__rate">
            <RatingStar value={score} />
            <span>{ratings}</span>
            <img src={personImg} alt="" width="16px" height="16px" />
          </div>
          <button className="btn info__install" >
            <a href={url} rel="noreferrer" target="_blank" style={{ color: "white" }}>Install</ a>
          </button>
        </div>
      </div>
    </div>
  )
}

const DetailScreenShots = ({ screenshots }) => {
  return (
    <div className="detail__screenshots">
      {screenshots && screenshots.map(imgSrc => <img key={imgSrc} src={imgSrc} alt="" />)}
    </div>
  )
}

const DetailDescription = ({ descriptionHTML }) => {
  const [close, setClose] = useState(true);

  return (
    <>
      <div className={`detail__des ${close && "detail__des--close"}`}>
        <p dangerouslySetInnerHTML={{ __html: descriptionHTML }}></p>
        <button className="btn btn--nobg" onClick={() => setClose(!close)}>
          {close ? "SEE MORE" : "COLLAPES"}
        </button>
      </div>
    </>
  )
}

export default Detail;
