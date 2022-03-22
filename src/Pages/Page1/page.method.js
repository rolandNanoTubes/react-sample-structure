import _ from 'lodash';

export default function MethodMixin(Component) {
    class FacebookMethods extends Component {
        constructor(props) {
            super(props);
            this.state = {
                dataDetails: [],
            };
        }

        componentDidMount() {
            const { getAnimalAdaptData } = this.props;
            getAnimalAdaptData()
                .then((data) => {
                    console.log(data);
                    this.setState({
                        dataDetails: _.get(data, 'entries', []).map((details) => ({
                            content1: details.Category,
                            content2: details.Description,
                        })),
                    })
                })
                .catch((e) => {
                    console.log('error : ', e);
                })
        }
    }

    return FacebookMethods;
}