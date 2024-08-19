import RulesHeader from './rules-components/RulesHeader';

const FilteringRulesSection = ({ rulesConfiguration }: any) => {
    return (
        <div>
            <RulesHeader initialRules={rulesConfiguration} />
        </div>
    );
};

export default FilteringRulesSection;
