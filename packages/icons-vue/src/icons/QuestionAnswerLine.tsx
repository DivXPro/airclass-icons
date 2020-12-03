// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuestionAnswerLineSvg from '@airclass/icons-svg/lib/asn/QuestionAnswerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionAnswerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionAnswerLineSvg}></AntdIcon>;
};

QuestionAnswerLine.displayName = 'QuestionAnswerLine';
QuestionAnswerLine.inheritAttrs = false;
export default QuestionAnswerLine;