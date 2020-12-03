// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuestionnaireLineSvg from '@airclass/icons-svg/lib/asn/QuestionnaireLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionnaireLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionnaireLineSvg}></AntdIcon>;
};

QuestionnaireLine.displayName = 'QuestionnaireLine';
QuestionnaireLine.inheritAttrs = false;
export default QuestionnaireLine;