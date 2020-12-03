// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuestionAnswerFillSvg from '@airclass/icons-svg/lib/asn/QuestionAnswerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionAnswerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionAnswerFillSvg}></AntdIcon>;
};

QuestionAnswerFill.displayName = 'QuestionAnswerFill';
QuestionAnswerFill.inheritAttrs = false;
export default QuestionAnswerFill;