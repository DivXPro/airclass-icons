// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitRepositoryPrivateLineSvg from '@airclass/icons-svg/lib/asn/GitRepositoryPrivateLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitRepositoryPrivateLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitRepositoryPrivateLineSvg}></AntdIcon>;
};

GitRepositoryPrivateLine.displayName = 'GitRepositoryPrivateLine';
GitRepositoryPrivateLine.inheritAttrs = false;
export default GitRepositoryPrivateLine;