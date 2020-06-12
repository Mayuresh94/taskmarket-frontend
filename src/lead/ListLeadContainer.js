import { connect } from "react-redux";
import ListLeadUi from "./ListLeadUI";
import LeadLoadService from "./LeadLoadService";

function mapStateToProps(state) {
  return {
    leadList: state.LeadLoadService.leadList,
    loading: state.LeadLoadService.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(LeadLoadService());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListLeadUi);
