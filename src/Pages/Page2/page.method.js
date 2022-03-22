export default function MethodMixin(Component) {
    class TodoMethods extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        componentDidMount() {
            console.log('Now Viewing Todo page!')
        }
    }

    return TodoMethods;
}