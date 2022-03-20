export default function MethodMixin(Component) {
    class HomeMethods extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        componentDidMount() {
            console.log('Now Viewing Home page!')
        }
    }

    return HomeMethods;
}