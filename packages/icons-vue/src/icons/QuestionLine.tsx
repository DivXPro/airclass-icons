// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuestionLineSvg from '@airclass/icons-svg/lib/asn/QuestionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionLineSvg}></AntdIcon>;
};

QuestionLine.displayName = 'QuestionLine';
QuestionLine.inheritAttrs = false;
export default QuestionLine;