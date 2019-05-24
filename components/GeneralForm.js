import { Layout, 
    Card, 
    FormLayout, 
    Checkbox,
    Page, 
    TextField
    } from '@shopify/polaris';


class GeneralForm extends React.Component {

    state = { 
        resultsValue: 'options',
        collectEmailChecked: true,
        resultsTitle: '',
        resultsParagraph: '',
        resultsTextAfter: '',
        introTitle: '',
        introParagraph: '',
        shareParagraph: ''
    };

    componentWillMount(){
        this.setState({...this.props})
    }

    componentWillReceiveProps(nextProps){
        console.log('NEXTPROPS', nextProps)
        if (nextProps !== this.props ) this.setState({...nextProps})
    }

    render() {

        const {
            collectEmailChecked,
            resultsTitle,
            resultsParagraph,
            resultsTextAfter,
            introTitle,
            introParagraph,
            shareParagraph
        } = this.state;

    return (
    <Page
        title="Settings"
        primaryAction={{
            content: 'Save',
            onAction: () => this.props.save(this.state),
    }}>
    <Layout>
        <Layout.AnnotatedSection
            title="General Settings"
            description="Tell us more about your quiz."
        >
            <Card sectioned>
            <FormLayout>
                <Checkbox
                    checked={collectEmailChecked}
                    label="Collect emails at the end of the quiz"
                    onChange={this.handleCollectEmailChange}
                />
            </FormLayout>
            </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
            title="Intro"
            description="The first slide your customers will see."
        >
            <Card sectioned>
            <FormLayout>
                <TextField 
                    label="Title"
                    value={introTitle}
                    onChange={this.handleChange('introTitle')} />
                <TextField 
                    label="Paragraph" 
                    value={introParagraph}
                    multiline 
                    onChange={this.handleChange('introParagraph')} />
            </FormLayout>
            </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
            title="Share Page"
            description="The paragraph inviting people to share their email."
        >
            <Card sectioned>
            <FormLayout>
                <TextField 
                    label="Text"
                    value={shareParagraph}
                    multiline 
                    onChange={this.handleChange('shareParagraph')} />
            </FormLayout>
            </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
            title="Results Page"
            description="Customize the last page of your quiz"
        >
            <Card sectioned>
            <FormLayout>
                <TextField 
                    label="Title" 
                    value={resultsTitle} 
                    onChange={this.handleChange('resultsTitle')} />
                <TextField 
                    label="Paragraph" 
                    value={resultsParagraph}
                    multiline 
                    onChange={this.handleChange('resultsParagraph')} />
                <TextField 
                    label="Text after the results" 
                    value={resultsTextAfter}
                    multiline 
                    onChange={this.handleChange('resultsTextAfter')} />
            </FormLayout>
            </Card>
        </Layout.AnnotatedSection>
    </Layout>
    </Page>
  )};

    handleCollectEmailChange = (value) => {
        this.setState({collectEmailChecked: value});
      };

    handleResultsChange = (checked, value) => {
        this.setState({resultsValue: value});
      };

    handleChange = (field) => {
        return (value) => this.setState({[field]: value});
      };
}

export default GeneralForm;