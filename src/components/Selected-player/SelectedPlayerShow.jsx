
import { PropTypes } from 'prop-types';

const SelectedPlayerShow = (selectedShows) => {
     const {author_img, author, role, id} = selectedShows
     return (
          <div>
               <img src={author_img} alt="" />
               {
                    selectedShows.map(selectShow => <Selected  key={selectShow.id}
                         selectShow={selectShow}> </Selected> )
               }
          </div>
     );
};
SelectedPlayerShow.propTypes = {
     SelectedPlayerShow: PropTypes.object
}


export default SelectedPlayerShow;