
export default function MethodMixin(Component) {
    class AboutMethods extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        componentDidMount() {
            console.log('Now Viewing About page!')
        }
    }

    return AboutMethods;
}