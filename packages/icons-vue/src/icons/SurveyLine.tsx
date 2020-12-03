// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SurveyLineSvg from '@airclass/icons-svg/lib/asn/SurveyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SurveyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SurveyLineSvg}></AntdIcon>;
};

SurveyLine.displayName = 'SurveyLine';
SurveyLine.inheritAttrs = false;
export default SurveyLine;