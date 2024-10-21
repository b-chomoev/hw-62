import Beks from '../../assets/IMG_7957.png';

const Home = () => {
  return (
    <div>
      <h1 className="text-secondary">Welcome to my personal page! Let's get to know each other better :)</h1>
      <div className="text-center">
        <img src={Beks} className="img-fluid rounded-4" alt="Beks photo" style={{width: 350}}/>
      </div>
      <div className="mt-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut dolor eros. Integer sagittis mattis
          nisi, id luctus leo dapibus vel. Curabitur aliquam, urna ut interdum efficitur, ante felis condimentum diam,
          dictum feugiat est lorem id velit. Mauris sit amet porta elit. Sed ac lacus iaculis, commodo arcu at, aliquet
          felis. Aliquam et lobortis felis. Praesent et orci id est commodo condimentum.</p>
        <p>Ut sit amet neque nec ex tempor suscipit. Pellentesque id libero id leo consectetur tempor ac et ipsum. Duis
          metus magna, condimentum ut venenatis eget, placerat vitae tellus. Quisque a placerat sem. Nunc et porttitor
          ligula. Sed diam erat, ullamcorper et quam eu, tincidunt egestas orci. Donec bibendum, odio vel porttitor
          sollicitudin, lorem urna aliquam nibh, ac rhoncus lorem sem vel quam. In posuere, ex vel efficitur viverra,
          elit metus consequat orci, tristique cursus mi risus eu nisi. Aenean ullamcorper dolor eget dolor faucibus,
          quis vestibulum magna lacinia. Mauris venenatis ultrices elementum. Quisque ac urna et ligula blandit egestas.
          Phasellus turpis mauris, sollicitudin nec maximus non, volutpat vitae tellus. Nam in leo eros. Sed lacinia
          diam dolor, nec facilisis mi rutrum vel. Sed congue justo neque, sed tincidunt metus bibendum a.</p>
      </div>
    </div>
  );
};

export default Home;