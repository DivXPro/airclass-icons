// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FeedbackLineSvg from '@airclass/icons-svg/lib/asn/FeedbackLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FeedbackLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FeedbackLineSvg}></AntdIcon>;
};

FeedbackLine.displayName = 'FeedbackLine';
FeedbackLine.inheritAttrs = false;
export default FeedbackLine;