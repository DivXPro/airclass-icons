// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitPullRequestFillSvg from '@airclass/icons-svg/lib/asn/GitPullRequestFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitPullRequestFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitPullRequestFillSvg}></AntdIcon>;
};

GitPullRequestFill.displayName = 'GitPullRequestFill';
GitPullRequestFill.inheritAttrs = false;
export default GitPullRequestFill;