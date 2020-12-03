// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitRepositoryFillSvg from '@airclass/icons-svg/lib/asn/GitRepositoryFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitRepositoryFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitRepositoryFillSvg}></AntdIcon>;
};

GitRepositoryFill.displayName = 'GitRepositoryFill';
GitRepositoryFill.inheritAttrs = false;
export default GitRepositoryFill;