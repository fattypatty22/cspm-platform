import { useState } from "react";

const T = {
  bg:"#080F0F", surface:"#0C1A1A", card:"#102020",
  border:"#1E5C5C", borderLight:"#2A7A7A", accent:"#2A9090",
  hi:"#F5E642", hiDeep:"#C9B800",
  text:"#E8F8F8", textSub:"#7ABABA", textDim:"#3A6A6A",
  nA:"#0D2020", nB:"#102828", nC:"#101800", nD:"#0A1A00",
};
const N = {
  bg:"#060A14", surface:"#0A1020", card:"#0E1830",
  border:"#1E3A70", borderLight:"#2A4A80",
  hi:"#F0A500", hiDeep:"#B07800",
  text:"#EEF4FF", textSub:"#7A9ACC", textDim:"#2A3A60",
  nA:"#080E20", nB:"#0C1830", nC:"#100C00", nD:"#140E00",
};

// ── CARD ──────────────────────────────────────────────────────────────────────
function Card({ icon, title, sub, pill, bg, bdr, style={} }) {
  return (
    <div style={{
      background: bg, border: `1.5px solid ${bdr}`,
      borderRadius: 8, padding: "10px 12px",
      display: "flex", flexDirection: "column",
      alignItems: "center", textAlign: "center",
      justifyContent: "center", minHeight: 72,
      position: "relative", boxShadow: "0 2px 8px #00000055",
      ...style
    }}>
      {pill && (
        <div style={{
          position: "absolute", top: 4, left: "50%", transform: "translateX(-50%)",
          fontSize: 7, fontWeight: 700, color: "#fff", whiteSpace: "nowrap",
          background: "#1A4A4A", borderRadius: 8, padding: "1px 8px", letterSpacing: 1
        }}>{pill}</div>
      )}
      {icon && <div style={{ fontSize: 16, marginBottom: 4, marginTop: pill ? 10 : 0 }}>{icon}</div>}
      <div style={{ fontSize: 10, fontWeight: 700, color: T.text, lineHeight: 1.4 }}>{title}</div>
      {sub && <div style={{ fontSize: 8, color: T.textSub, marginTop: 3, lineHeight: 1.3 }}>{sub}</div>}
    </div>
  );
}

function NCard({ icon, title, sub, pill, bg, bdr, style={} }) {
  return (
    <div style={{
      background: bg, border: `1.5px solid ${bdr}`,
      borderRadius: 8, padding: "10px 12px",
      display: "flex", flexDirection: "column",
      alignItems: "center", textAlign: "center",
      justifyContent: "center", minHeight: 72,
      position: "relative", boxShadow: "0 2px 8px #00000055",
      ...style
    }}>
      {pill && (
        <div style={{
          position: "absolute", top: 4, left: "50%", transform: "translateX(-50%)",
          fontSize: 7, fontWeight: 700, color: "#fff", whiteSpace: "nowrap",
          background: N.hiDeep, borderRadius: 8, padding: "1px 8px", letterSpacing: 1
        }}>{pill}</div>
      )}
      {icon && <div style={{ fontSize: 16, marginBottom: 4, marginTop: pill ? 10 : 0 }}>{icon}</div>}
      <div style={{ fontSize: 10, fontWeight: 700, color: N.text, lineHeight: 1.4 }}>{title}</div>
      {sub && <div style={{ fontSize: 8, color: N.textSub, marginTop: 3, lineHeight: 1.3 }}>{sub}</div>}
    </div>
  );
}

// ── ARROWS ────────────────────────────────────────────────────────────────────
function ArrowDown({ label, color = T.hi, dashed }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px 0" }}>
      {label && <div style={{ fontSize: 7.5, color: T.textSub, marginBottom: 1, textAlign: "center" }}>{label}</div>}
      <div style={{
        width: 2, height: 18,
        background: dashed
          ? `repeating-linear-gradient(to bottom,${color} 0,${color} 4px,transparent 4px,transparent 8px)`
          : color
      }}/>
      <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `6px solid ${color}` }}/>
    </div>
  );
}

function ArrowRight({ label, color = T.hi, dashed }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
      {label && <div style={{ fontSize: 7, color: T.textSub, whiteSpace: "nowrap" }}>{label}</div>}
      <div style={{
        height: 2, width: 22,
        background: dashed
          ? `repeating-linear-gradient(to right,${color} 0,${color} 4px,transparent 4px,transparent 8px)`
          : color
      }}/>
      <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: `6px solid ${color}` }}/>
    </div>
  );
}

function Zone({ label, color, bg = "transparent", children, style = {} }) {
  return (
    <div style={{
      border: `1.5px dashed ${color}`, borderRadius: 10,
      padding: 10, background: bg, ...style
    }}>
      <div style={{ fontSize: 7.5, fontWeight: 800, color, letterSpacing: "0.8px", textAlign: "center", marginBottom: 8 }}>{label}</div>
      {children}
    </div>
  );
}

function Tip({ text, color }) {
  return (
    <div style={{
      background: "#0C1020", borderRadius: 8, padding: "7px 14px", marginBottom: 12,
      border: `1px solid ${color}`, display: "flex", gap: 8, alignItems: "center"
    }}>
      <span style={{ color, fontSize: 10, fontWeight: 700 }}>ℹ</span>
      <span style={{ color: "#8AABCC", fontSize: 10 }}>{text}</span>
    </div>
  );
}

const G = (cols, gap = 10) => ({ display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gap });
const Col = ({ children, gap = 8 }) => <div style={{ display: "flex", flexDirection: "column", gap }}>{children}</div>;
const Ctr = ({ children, style = {} }) => <div style={{ display: "flex", justifyContent: "center", ...style }}>{children}</div>;

// ════════════════════════════════════════════════════════════
// DIAGRAM 1 — SYSTEM ARCHITECTURE
// ════════════════════════════════════════════════════════════
function SystemArch() {
  return (
    <div>
      <Tip text="System Architecture — 4 layers: Ingestion → Processing → Intelligence → Output" color={T.accent}/>
      <Zone label="☁  AWS CLOUD ENVIRONMENT" color={T.accent} bg={`${T.accent}08`}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 44px 1fr 44px 1fr 44px 1fr", alignItems: "center", gap: 0 }}>
          <Zone label="INGESTION LAYER" color={T.borderLight}>
            <Col>
              <Card icon="📡" title="Data Ingestion" sub="CloudWatch Events" bg={T.nA} bdr={T.borderLight} pill="INGEST"/>
              <Card icon="⚙️" title="AWS Config" sub="Resource Snapshots" bg={T.nA} bdr={T.border}/>
              <Card icon="📋" title="CloudTrail" sub="API Audit Logs" bg={T.nA} bdr={T.border}/>
              <Card icon="🛡️" title="Security Hub" sub="Aggregated Findings" bg={T.nA} bdr={T.border}/>
            </Col>
          </Zone>
          <Col gap={16} style={{ alignItems: "center" }}>
            <ArrowRight label="events"/><ArrowRight/><ArrowRight label="logs"/><ArrowRight/>
          </Col>
          <Zone label="PROCESSING ENGINES" color={T.accent}>
            <Col>
              <Card icon="✅" title="Compliance Engine" sub="CIS / NIST / SOC2" bg={T.nB} bdr={T.accent} pill="PROCESS"/>
              <Card icon="📊" title="Risk Assessment" sub="CVSS Scoring" bg={T.nB} bdr={T.accent} pill="PROCESS"/>
              <Card icon="🔧" title="Auto Remediation" sub="Lambda + SSM" bg={T.nB} bdr={T.accent} pill="PROCESS"/>
            </Col>
          </Zone>
          <Col gap={16} style={{ alignItems: "center" }}>
            <ArrowRight label="findings"/><ArrowRight label="scores"/><ArrowRight label="actions"/>
          </Col>
          <Zone label="INTELLIGENCE" color={T.borderLight}>
            <Col>
              <Card icon="🧠" title="AI / ML Engine" sub="SageMaker Anomaly" bg={T.nC} bdr={T.hiDeep} pill="INTEL"/>
              <Card icon="🗄️" title="Data Store" sub="S3 + DynamoDB" bg={T.nC} bdr={T.hiDeep} pill="STORE"/>
            </Col>
          </Zone>
          <Col gap={16} style={{ alignItems: "center" }}>
            <ArrowRight label="insights"/><ArrowRight label="alerts"/>
          </Col>
          <Zone label="OUTPUT LAYER" color={T.borderLight}>
            <Col>
              <Card icon="📈" title="Dashboard" sub="QuickSight / UI" bg={T.nD} bdr={T.hi} pill="OUTPUT"/>
              <Card icon="🚨" title="SIEM" sub="CloudWatch / Splunk" bg={T.nD} bdr={T.hi}/>
              <Card icon="🎫" title="Ticketing" sub="Jira / ServiceNow" bg={T.nD} bdr={T.hi}/>
            </Col>
          </Zone>
        </div>
      </Zone>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// DIAGRAM 2 — NETWORK DIAGRAM
// ════════════════════════════════════════════════════════════
function NetworkDiag() {
  return (
    <div>
      <Tip text="Network Diagram — AWS VPC with Public, Private and Isolated subnets" color={T.accent}/>
      <Ctr><Card icon="🌐" title="Internet" sub="External Traffic" bg={T.nA} bdr={T.border} style={{ width: 160, marginBottom: 4 }}/></Ctr>
      <div style={{ display: "flex", justifyContent: "center", gap: 60 }}>
        <ArrowDown label="WAF"/><ArrowDown label="HTTPS"/>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 4 }}>
        <Card icon="🧱" title="AWS WAF" sub="Layer 7 Filter" bg={T.nB} bdr={T.accent} style={{ width: 155 }}/>
        <Card icon="🔀" title="Internet Gateway" sub="Entry Point" bg={T.nA} bdr={T.border} style={{ width: 155 }}/>
      </div>
      <Ctr><ArrowDown label="to ALB"/></Ctr>
      <Ctr><Card icon="⚖️" title="Application Load Balancer" sub="Traffic Distribution" bg={T.nB} bdr={T.accent} style={{ width: 260, marginBottom: 4 }}/></Ctr>
      <Ctr><ArrowDown label="route"/></Ctr>
      <Zone label="🏢  AWS VPC — 10.0.0.0/16" color={T.accent} bg={`${T.accent}08`}>
        <div style={{ ...G(3, 12) }}>
          <Zone label="PUBLIC SUBNET — 10.0.1.0/24" color={T.borderLight}>
            <Col>
              <Card icon="🔁" title="NAT Gateway" sub="Outbound Traffic" bg={T.nA} bdr={T.border}/>
              <Card icon="🔐" title="VPN Gateway" sub="Secure Tunnel" bg={T.nA} bdr={T.border}/>
              <Card icon="🏰" title="Bastion Host" sub="Admin Access" bg={T.nA} bdr={T.border}/>
              <Card icon="👁️" title="GuardDuty" sub="Threat Detection" bg={T.nB} bdr={T.accent}/>
            </Col>
          </Zone>
          <Zone label="PRIVATE SUBNET — 10.0.2.0/24" color={T.accent}>
            <Col>
              <Card icon="🛡️" title="CSPM Engine" sub="EC2 + EKS" bg={T.nB} bdr={T.accent}/>
              <Card icon="⚡" title="Lambda" sub="Remediation Functions" bg={T.nB} bdr={T.accent}/>
              <Card icon="🗄️" title="RDS Aurora" sub="Compliance DB" bg={T.nC} bdr={T.hiDeep}/>
            </Col>
          </Zone>
          <Zone label="ISOLATED SUBNET — 10.0.3.0/24" color={T.hiDeep}>
            <Col>
              <Card icon="📊" title="Security Hub" sub="Findings Aggregation" bg={T.nD} bdr={T.hi}/>
              <Card icon="🧠" title="SageMaker" sub="ML Risk Model" bg={T.nD} bdr={T.hi}/>
              <Card icon="🔑" title="Secrets Manager" sub="KMS Encrypted" bg={T.nC} bdr={T.hiDeep}/>
            </Col>
          </Zone>
        </div>
      </Zone>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// DIAGRAM 3 — DATA FLOW DIAGRAM
// ════════════════════════════════════════════════════════════
function DFDiag() {
  const [lv, setLv] = useState(0);
  return (
    <div>
      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        {["Level 0 — Context DFD", "Level 1 — Detailed DFD"].map((l, i) => (
          <button key={i} onClick={() => setLv(i)} style={{
            padding: "7px 18px", borderRadius: 6, fontWeight: 700, fontSize: 10, cursor: "pointer",
            border: `1.5px solid ${lv === i ? T.hi : T.border}`,
            background: lv === i ? "#1A3000" : T.card,
            color: lv === i ? T.hi : T.textSub,
          }}>{l}</button>
        ))}
      </div>
      {lv === 0 ? (
        <div>
          <div style={{ textAlign: "center", fontSize: 13, fontWeight: 700, color: T.hi, marginBottom: 16 }}>Level 0 — Context DFD: AWS CSPM Platform</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", alignItems: "center", gap: 8 }}>
            <Card icon="👤" title="Security Admin" sub="External Entity" bg={T.nA} bdr={T.border}/>
            <Col gap={12}><ArrowRight label="Policies / Config"/><ArrowRight label="Reports / Alerts" dashed/></Col>
            <Card icon="🛡️" title="CSPM Platform" sub="Central Process" bg={T.nB} bdr={T.accent} pill="CORE"/>
            <Col gap={12}><ArrowRight label="Resource Data"/><ArrowRight label="Remediation Cmds" dashed/></Col>
            <Card icon="☁️" title="AWS Resources" sub="External Entity" bg={T.nA} bdr={T.border}/>
          </div>
          <Ctr style={{ marginTop: 8, flexDirection: "column" }}>
            <ArrowDown label="Alerts / Tickets"/>
            <Card icon="🔗" title="SIEM / Ticketing" sub="External System" bg={T.nA} bdr={T.border} style={{ width: 200 }}/>
          </Ctr>
          <div style={{ marginTop: 10, textAlign: "center", fontSize: 8, color: T.textDim }}>Solid = data in · Dashed = data out / commands</div>
        </div>
      ) : (
        <div>
          <div style={{ textAlign: "center", fontSize: 13, fontWeight: 700, color: T.hi, marginBottom: 16 }}>Level 1 — Detailed DFD: AWS CSPM Platform</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr", alignItems: "start", gap: 8 }}>
            <Col>
              <Card icon="☁️" title="AWS Services" sub="EC2 / S3 / IAM" bg={T.nA} bdr={T.border}/>
              <Card icon="👤" title="Sec Admin" sub="External Entity" bg={T.nA} bdr={T.border} style={{ marginTop: 8 }}/>
            </Col>
            <Col gap={24} style={{ paddingTop: 16 }}>
              <ArrowRight label="telemetry"/><ArrowRight label="reports" dashed/>
            </Col>
            <Col>
              <Card icon="📡" title="P1: Ingest" sub="CloudTrail / Config" bg={T.nB} bdr={T.accent}/>
              <Card icon="✅" title="P2: Compliance" sub="Rules Engine" bg={T.nB} bdr={T.accent} style={{ marginTop: 8 }}/>
              <Card icon="📊" title="P3: Risk Score" sub="CVSS + ML" bg={T.nB} bdr={T.accent} style={{ marginTop: 8 }}/>
            </Col>
            <Col gap={24} style={{ paddingTop: 8 }}>
              <ArrowRight label="findings"/><ArrowRight label="violations"/><ArrowRight label="high-risk"/>
            </Col>
            <Col>
              <Card icon="🗄️" title="D1: Rules DB" sub="DynamoDB" bg={T.nC} bdr={T.hiDeep}/>
              <Card icon="🪣" title="D2: Findings" sub="S3 Data Lake" bg={T.nC} bdr={T.hiDeep} style={{ marginTop: 8 }}/>
              <Card icon="🔧" title="P4: Remediate" sub="Lambda / SSM" bg={T.nD} bdr={T.hi} style={{ marginTop: 8 }}/>
            </Col>
            <Col gap={24} style={{ paddingTop: 8 }}>
              <ArrowRight label="scores"/><ArrowRight label="alerts"/>
            </Col>
            <Col>
              <Card icon="📈" title="P5: Report" sub="QuickSight / SNS" bg={T.nD} bdr={T.hi}/>
              <Card icon="🚨" title="SIEM" sub="Splunk" bg={T.nA} bdr={T.border} style={{ marginTop: 8 }}/>
              <Card icon="🎫" title="Ticketing" sub="Jira" bg={T.nA} bdr={T.border} style={{ marginTop: 8 }}/>
            </Col>
          </div>
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// DIAGRAM 4 — PROCESS FLOW
// ════════════════════════════════════════════════════════════
function ProcessFlow() {
  return (
    <div>
      <Tip text="Process Flow — automated remediation from trigger to resolution" color={N.hi}/>
      <div style={{ background: N.bg, borderRadius: 12, border: `1.5px solid ${N.border}`, padding: "20px 16px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: N.hi, textAlign: "center", marginBottom: 16 }}>Process Flow — CSPM Automated Remediation Workflow</div>
        <Ctr><NCard icon="⚡" title="Trigger Event" sub="Scheduled / CloudWatch / API" pill="▶ START" bg="#101E40" bdr={N.hi} style={{ width: 230 }}/></Ctr>
        <Ctr><ArrowDown color={N.hi}/></Ctr>
        <Ctr><NCard icon="🔍" title="Cloud Config Scan" sub="Prowler · Scout Suite · AWS Config" bg={N.nB} bdr={N.borderLight} style={{ width: 270 }}/></Ctr>
        <Ctr><ArrowDown label="raw findings" color={N.hi}/></Ctr>
        <Ctr><NCard icon="📋" title="Finding Classifier" sub="Severity · Type · Priority" bg={N.nC} bdr={N.hiDeep} style={{ width: 270 }}/></Ctr>

        {/* Fan out */}
        <Ctr><div style={{ width: 2, height: 14, background: N.hi }}/></Ctr>
        <div style={{ height: 2, background: N.hi, margin: "0 80px" }}/>
        <div style={{ display: "flex", justifyContent: "space-between", margin: "0 80px" }}>
          {[0,1,2,3].map(i => <div key={i} style={{ width: 2, height: 14, background: N.hi }}/>)}
        </div>
        <div style={{ ...G(4, 10), margin: "0 10px" }}>
          <NCard icon="✅" title="Compliance Check" sub="CIS / NIST / ISO 27001" bg={N.nB} bdr={N.borderLight}/>
          <NCard icon="📊" title="Risk Scoring" sub="CVSS + FAIR Model" bg={N.nB} bdr={N.borderLight}/>
          <NCard icon="🔧" title="Auto Remediation" sub="Lambda / Ansible" bg={N.nB} bdr={N.borderLight}/>
          <NCard icon="✍️" title="Approval Workflow" sub="Change Management" bg={N.nB} bdr={N.borderLight}/>
        </div>
        <div style={{ ...G(4, 10), margin: "0 10px" }}>
          {[0,1,2,3].map(i => <Ctr key={i}><ArrowDown color={N.hi}/></Ctr>)}
        </div>
        <div style={{ ...G(4, 10), margin: "0 10px" }}>
          <NCard icon="📄" title="Compliance Report" sub="Audit Evidence" bg={N.nC} bdr={N.hiDeep}/>
          <NCard icon="🎯" title="Risk Dashboard" sub="Prioritized List" bg={N.nC} bdr={N.hiDeep}/>
          <NCard icon="🔁" title="Self-Healing" sub="Auto rollback / fix" bg={N.nC} bdr={N.hiDeep}/>
          <NCard icon="📁" title="Change Record" sub="ITSM / ServiceNow" bg={N.nC} bdr={N.hiDeep}/>
        </div>
        {/* Converge */}
        <div style={{ display: "flex", justifyContent: "space-between", margin: "2px 80px 0" }}>
          {[0,1,2,3].map(i => <div key={i} style={{ width: 2, height: 14, background: N.borderLight }}/>)}
        </div>
        <div style={{ height: 2, background: N.borderLight, margin: "0 80px" }}/>
        <Ctr><div style={{ width: 2, height: 14, background: N.borderLight }}/></Ctr>
        <Ctr><div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `7px solid ${N.borderLight}` }}/></Ctr>
        <Ctr><NCard icon="🔔" title="Notify & Alert" sub="SNS · Slack · PagerDuty" bg="#101E40" bdr={N.hi} style={{ width: 230, marginTop: 4 }}/></Ctr>
        <Ctr><ArrowDown color={N.hi}/></Ctr>
        <Ctr><NCard icon="✅" title="Finding Closed" sub="Ticket resolved & logged" pill="■ END" bg="#101E40" bdr={N.hi} style={{ width: 230 }}/></Ctr>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// DIAGRAM 5 — SECURITY ARCHITECTURE
// ════════════════════════════════════════════════════════════
function SecurityArch() {
  return (
    <div>
      <Tip text="Security Architecture — defense-in-depth with 4 trust layers" color={N.hi}/>
      <div style={{ background: N.bg, borderRadius: 12, border: `1.5px solid ${N.border}`, padding: "20px 16px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: N.hi, textAlign: "center", marginBottom: 16 }}>Security Architecture — Defense-in-Depth CSPM</div>
        <Zone label="LAYER 1 — PERIMETER" color={N.hi} bg={`${N.hi}08`}>
          <div style={{ ...G(3, 10) }}>
            <NCard icon="🧱" title="AWS WAF" sub="Layer 7 Filtering" bg="#101E40" bdr={N.hi}/>
            <NCard icon="🛡️" title="AWS Shield" sub="DDoS Protection" bg="#101E40" bdr={N.hi}/>
            <NCard icon="🌐" title="CloudFront CDN" sub="Edge Security" bg="#101E40" bdr={N.hi}/>
          </div>
        </Zone>
        <Ctr><ArrowDown label="filtered traffic" color={N.hi}/></Ctr>
        <div style={{ ...G(3, 10), marginBottom: 4 }}>
          <Zone label="IDENTITY & ACCESS" color={N.borderLight}>
            <Col>
              <NCard icon="👤" title="IAM" sub="Least Privilege" bg={N.nB} bdr={N.borderLight}/>
              <NCard icon="🔐" title="MFA" sub="Enforced All Users" bg={N.nB} bdr={N.borderLight}/>
              <NCard icon="🔑" title="SSO" sub="SAML / OIDC" bg={N.nB} bdr={N.borderLight}/>
            </Col>
          </Zone>
          <Zone label="CSPM CORE ENGINE" color={N.hi} bg={`${N.hi}06`}>
            <NCard icon="🛡️" title="CSPM Core Engine" sub="Continuous Posture · Policy Enforcement · Risk Scoring" bg={N.nB} bdr={N.hi} pill="CORE" style={{ marginBottom: 8 }}/>
            <div style={{ ...G(2, 8) }}>
              <NCard icon="📡" title="SIEM" sub="Log Correlation" bg={N.nB} bdr={N.borderLight}/>
              <NCard icon="⚡" title="SOAR" sub="Auto Response" bg={N.nB} bdr={N.borderLight}/>
              <NCard icon="👁️" title="GuardDuty" sub="Threat Detection" bg={N.nB} bdr={N.borderLight}/>
              <NCard icon="🔬" title="Inspector" sub="Vulnerability Scan" bg={N.nB} bdr={N.borderLight}/>
            </div>
          </Zone>
          <Zone label="DATA PROTECTION" color={N.borderLight}>
            <Col>
              <NCard icon="🔒" title="AWS KMS" sub="Key Management" bg={N.nB} bdr={N.borderLight}/>
              <NCard icon="🔎" title="Macie" sub="Data Classification" bg={N.nB} bdr={N.borderLight}/>
              <NCard icon="🗝️" title="Secrets Manager" sub="Encrypted Secrets" bg={N.nB} bdr={N.borderLight}/>
            </Col>
          </Zone>
        </div>
        <Ctr><ArrowDown label="findings" color={N.hi}/></Ctr>
        <Zone label="LAYER 3 — COMPLIANCE & AUDIT" color={N.hiDeep} bg={`${N.hiDeep}08`}>
          <div style={{ ...G(4, 10) }}>
            <NCard icon="⚙️" title="AWS Config" sub="Drift Detection" bg={N.nC} bdr={N.hiDeep}/>
            <NCard icon="📊" title="Security Hub" sub="Findings Aggregation" bg={N.nC} bdr={N.hiDeep}/>
            <NCard icon="📋" title="CloudTrail" sub="API Audit Logs" bg={N.nC} bdr={N.hiDeep}/>
            <NCard icon="📁" title="Audit Logs" sub="S3 + Glacier Archive" bg={N.nC} bdr={N.hiDeep}/>
          </div>
        </Zone>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// DIAGRAM 6 — CLOUD / HYBRID / ON-PREM
// ════════════════════════════════════════════════════════════
function CloudHybrid() {
  const AWS = "#FF9900", AZ = "#0078D4", GCP = "#34A853", OP = N.borderLight;
  return (
    <div>
      <Tip text="Cloud / Hybrid / On-Prem — 4 environments unified under one governance layer" color={N.hi}/>
      <div style={{ background: N.bg, borderRadius: 12, border: `1.5px solid ${N.border}`, padding: "20px 16px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: N.hi, textAlign: "center", marginBottom: 16 }}>Cloud / Hybrid / On-Prem Architecture — CSPM</div>
        <div style={{ ...G(4, 10), marginBottom: 6 }}>
          <Zone label="ON-PREMISES" color={OP}>
            <Col>
              <NCard icon="🏢" title="Data Center" sub="Physical Infra" bg={N.nA} bdr={OP}/>
              <NCard icon="🖥️" title="On-Prem CSPM" sub="Wazuh / Nessus" bg={N.nA} bdr={OP}/>
              <NCard icon="🗄️" title="Legacy Systems" sub="SIEM Agent" bg={N.nA} bdr={OP}/>
            </Col>
          </Zone>
          <Zone label="AWS CLOUD" color={AWS} bg={`${AWS}08`}>
            <Col>
              <NCard icon="☁️" title="Security Hub" sub="Config + CloudTrail" bg={N.nB} bdr={AWS}/>
              <NCard icon="⚡" title="Lambda" sub="Auto Remediation" bg={N.nB} bdr={AWS}/>
              <NCard icon="🪣" title="S3 Data Lake" sub="Findings Store" bg={N.nB} bdr={AWS}/>
            </Col>
          </Zone>
          <Zone label="AZURE" color={AZ} bg={`${AZ}08`}>
            <Col>
              <NCard icon="📋" title="Azure Policy" sub="Compliance Rules" bg={N.nB} bdr={AZ}/>
              <NCard icon="🔍" title="Sentinel SIEM" sub="Log Analytics" bg={N.nB} bdr={AZ}/>
              <NCard icon="👤" title="Azure AD" sub="Identity & Access" bg={N.nB} bdr={AZ}/>
            </Col>
          </Zone>
          <Zone label="GCP" color={GCP} bg={`${GCP}08`}>
            <Col>
              <NCard icon="🛡️" title="Sec Command Ctr" sub="Posture Management" bg={N.nB} bdr={GCP}/>
              <NCard icon="📊" title="BigQuery" sub="Risk Analytics" bg={N.nB} bdr={GCP}/>
              <NCard icon="📡" title="Chronicle SIEM" sub="Threat Intelligence" bg={N.nB} bdr={GCP}/>
            </Col>
          </Zone>
        </div>
        <div style={{ ...G(4, 10), margin: "0 10px 4px" }}>
          {[["VPN tunnel", OP, true], ["findings", N.hi, false], ["findings", N.hi, false], ["findings", N.hi, false]].map(([l, c, d], i) => (
            <Ctr key={i}><ArrowDown label={l} color={c} dashed={d}/></Ctr>
          ))}
        </div>
        <Zone label="UNIFIED CSPM GOVERNANCE LAYER" color={N.hi} bg={`${N.hi}08`}>
          <div style={{ ...G(4, 8) }}>
            <NCard icon="🔒" title="Cloud Custodian" sub="Policy as Code" bg="#101E40" bdr={N.hi}/>
            <NCard icon="📜" title="Open Policy Agent" sub="OPA Rules Engine" bg="#101E40" bdr={N.hi}/>
            <NCard icon="🏗️" title="Terraform" sub="IaC Automation" bg="#101E40" bdr={N.hi}/>
            <NCard icon="🔗" title="REST APIs" sub="Multi-cloud SDKs" bg="#101E40" bdr={N.hi}/>
          </div>
        </Zone>
        <Ctr><ArrowDown label="single pane of glass" color={N.hi}/></Ctr>
        <Ctr>
          <NCard icon="📈" title="Unified Security Dashboard" sub="Centralized Visibility · Risk · Compliance · Alerts · Reporting" bg="#101E40" bdr={N.hi} style={{ maxWidth: 520 }}/>
        </Ctr>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// MAIN APP
// ════════════════════════════════════════════════════════════
const TABS = [
  { label: "🏗️ System Architecture",   theme: "teal" },
  { label: "🌐 Network Diagram",        theme: "teal" },
  { label: "📊 Data Flow (DFD)",        theme: "teal" },
  { label: "⚙️ Process Flow",           theme: "navy" },
  { label: "🔐 Security Architecture",  theme: "navy" },
  { label: "☁️ Cloud / Hybrid",         theme: "navy" },
];

export default function App() {
  const [tab, setTab] = useState(0);
  const isTeal = tab < 3;
  return (
    <div style={{ minHeight: "100vh", background: "#060A10", fontFamily: "Inter,sans-serif", padding: 20 }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
          <div style={{ width: 4, height: 44, background: "linear-gradient(180deg,#F5E642,#F0A500,#2A9090)", borderRadius: 4 }}/>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#EEF4FF" }}>AWS CSPM Platform</div>
            <div style={{ fontSize: 10, color: "#4A7A7A", marginTop: 2, letterSpacing: "0.8px" }}>ADVANCED CLOUD SECURITY POSTURE MANAGEMENT — 6 DESIGN ARTIFACTS</div>
          </div>
        </div>
        <div style={{ height: 1, background: "linear-gradient(90deg,#F5E642,#F0A500,#2A9090,transparent)" }}/>
      </div>

      {/* Tabs */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 8, color: T.textDim, fontWeight: 700, letterSpacing: "1px", marginRight: 4 }}>TEAL ▸</span>
          {TABS.filter(t => t.theme === "teal").map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              padding: "6px 14px", borderRadius: 6, fontWeight: 700, fontSize: 9.5, cursor: "pointer",
              border: `1.5px solid ${tab === i ? T.hi : T.border}`,
              background: tab === i ? "#1C3600" : T.card,
              color: tab === i ? T.hi : T.textSub,
            }}>{t.label}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 8, color: N.textDim, fontWeight: 700, letterSpacing: "1px", marginRight: 4 }}>NAVY ▸</span>
          {TABS.filter(t => t.theme === "navy").map((t, i) => (
            <button key={i + 3} onClick={() => setTab(i + 3)} style={{
              padding: "6px 14px", borderRadius: 6, fontWeight: 700, fontSize: 9.5, cursor: "pointer",
              border: `1.5px solid ${tab === i + 3 ? N.hi : N.border}`,
              background: tab === i + 3 ? "#1C1000" : N.card,
              color: tab === i + 3 ? N.hi : N.textSub,
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      {/* Diagram */}
      <div style={{
        background: isTeal ? T.surface : N.surface,
        borderRadius: 12, padding: 20,
        border: `1px solid ${isTeal ? T.border : N.border}`,
        overflowX: "auto"
      }}>
        {tab === 0 && <SystemArch/>}
        {tab === 1 && <NetworkDiag/>}
        {tab === 2 && <DFDiag/>}
        {tab === 3 && <ProcessFlow/>}
        {tab === 4 && <SecurityArch/>}
        {tab === 5 && <CloudHybrid/>}
      </div>

      <div style={{ marginTop: 10, textAlign: "center", fontSize: 8, color: "#2A4A4A" }}>
        AWS CSPM Platform · Topic 89 · EduQual Level 6
      </div>
    </div>
  );
}
