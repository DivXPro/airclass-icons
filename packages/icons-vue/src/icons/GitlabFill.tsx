// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitlabFillSvg from '@airclass/icons-svg/lib/asn/GitlabFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitlabFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitlabFillSvg}></AntdIcon>;
};

GitlabFill.displayName = 'GitlabFill';
GitlabFill.inheritAttrs = false;
export default GitlabFill;