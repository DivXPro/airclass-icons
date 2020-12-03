// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitlabLineSvg from '@airclass/icons-svg/lib/asn/GitlabLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitlabLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitlabLineSvg}></AntdIcon>;
};

GitlabLine.displayName = 'GitlabLine';
GitlabLine.inheritAttrs = false;
export default GitlabLine;