import React, { useState } from 'react';
import './Reports.css';

const Reports = ({ isAdmin }) => {
  const [reportType, setReportType] = useState('financial');
  const [dateRange, setDateRange] = useState({ start: '2025-01-01', end: '2025-12-31' });

  // Données de démonstration
  const financialData = {
    totalIncome: 2500,
    totalExpenses: 1200,
    netProfit: 1300,
    membershipFees: 1800,
    eventRevenue: 700
  };

  const membershipData = {
    totalMembers: 120,
    activeMembers: 105,
    newMembers: 25,
    renewalRate: '87%'
  };

  const eventData = {
    totalEvents: 12,
    attendedEvents: 8,
    averageAttendance: 45,
    participationRate: '75%'
  };

  const handleGenerateReport = () => {
    alert(`Rapport ${reportType} généré pour la période du ${dateRange.start} au ${dateRange.end}`);
  };

  return (
    <div className="reports-container">
      {/* Éléments flotnants spécifiques aux rapports */}
      <div className="report-floating-element floating-icon-1">📈</div>
      <div className="report-floating-element floating-icon-2">📋</div>
      <div className="report-floating-element floating-icon-3">📊</div>
      
      <h2>Rapports et Analyses</h2>
      
      <div className="report-controls">
        <div className="control-group">
          <label htmlFor="reportType">Type de rapport:</label>
          <select 
            id="reportType" 
            value={reportType} 
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="financial">Rapport Financier</option>
            <option value="membership">Rapport des Membres</option>
            <option value="events">Rapport des Événements</option>
            <option value="activity">Rapport d'Activité</option>
          </select>
        </div>
        
        <div className="control-group">
          <label htmlFor="startDate">Date de début:</label>
          <input 
            type="date" 
            id="startDate" 
            value={dateRange.start} 
            onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
          />
        </div>
        
        <div className="control-group">
          <label htmlFor="endDate">Date de fin:</label>
          <input 
            type="date" 
            id="endDate" 
            value={dateRange.end} 
            onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
          />
        </div>
        
        <button className="generate-btn" onClick={handleGenerateReport}>
          Générer le rapport
        </button>
      </div>
      
      {reportType === 'financial' && (
        <div className="report-section financial-report">
          <h3>Rapport Financier</h3>
          <div className="metrics-grid">
            <div className="metric-card income">
              <h4>Revenus Totaux</h4>
              <p className="amount">{financialData.totalIncome}€</p>
              <div className="trend positive">↑ 12% par rapport à l'année dernière</div>
            </div>
            
            <div className="metric-card expenses">
              <h4>Dépenses Totales</h4>
              <p className="amount">{financialData.totalExpenses}€</p>
              <div className="trend negative">↓ 5% par rapport à l'année dernière</div>
            </div>
            
            <div className="metric-card profit">
              <h4>Bénéfice Net</h4>
              <p className="amount">{financialData.netProfit}€</p>
              <div className="trend positive">↑ 18% par rapport à l'année dernière</div>
            </div>
          </div>
          
          <div className="breakdown">
            <h4>Répartition des Revenus</h4>
            <div className="breakdown-item">
              <span>Cotisations des membres</span>
              <span>{financialData.membershipFees}€</span>
            </div>
            <div className="breakdown-item">
              <span>Revenus des événements</span>
              <span>{financialData.eventRevenue}€</span>
            </div>
          </div>
        </div>
      )}
      
      {reportType === 'membership' && (
        <div className="report-section membership-report">
          <h3>Rapport des Membres</h3>
          <div className="metrics-grid">
            <div className="metric-card members">
              <h4>Membres Totaux</h4>
              <p className="amount">{membershipData.totalMembers}</p>
              <div className="trend positive">↑ 25 nouveaux membres</div>
            </div>
            
            <div className="metric-card active">
              <h4>Membres Actifs</h4>
              <p className="amount">{membershipData.activeMembers}</p>
              <div className="trend">Taux d'engagement: 87%</div>
            </div>
            
            <div className="metric-card renewal">
              <h4>Taux de Renouvellement</h4>
              <p className="amount">{membershipData.renewalRate}</p>
              <div className="trend positive">↑ 3% par rapport à l'année dernière</div>
            </div>
          </div>
          
          <div className="chart-placeholder">
            <h4>Croissance des membres</h4>
            <div className="chart-area">
              <div className="chart-bar" style={{height: '60%'}}></div>
              <div className="chart-bar" style={{height: '70%'}}></div>
              <div className="chart-bar" style={{height: '80%'}}></div>
              <div className="chart-bar" style={{height: '85%'}}></div>
              <div className="chart-bar" style={{height: '90%'}}></div>
              <div className="chart-bar" style={{height: '95%'}}></div>
              <div className="chart-bar" style={{height: '100%'}}></div>
            </div>
          </div>
        </div>
      )}
      
      {reportType === 'events' && (
        <div className="report-section events-report">
          <h3>Rapport des Événements</h3>
          <div className="metrics-grid">
            <div className="metric-card events">
              <h4>Événements Organisés</h4>
              <p className="amount">{eventData.totalEvents}</p>
              <div className="trend">12 événements cette année</div>
            </div>
            
            <div className="metric-card attendance">
              <h4>Fréquentation Moyenne</h4>
              <p className="amount">{eventData.averageAttendance}</p>
              <div className="trend positive">↑ 10% par rapport à l'année dernière</div>
            </div>
            
            <div className="metric-card participation">
              <h4>Taux de Participation</h4>
              <p className="amount">{eventData.participationRate}</p>
              <div className="trend">75% des membres actifs</div>
            </div>
          </div>
          
          <div className="upcoming-events">
            <h4>Événements à Venir</h4>
            <ul>
              <li>Assemblée Générale - 15 Janvier 2026</li>
              <li>Tournoi Sportif - 10 Mars 2026</li>
              <li>Soirée Thématique - 15 Mai 2026</li>
            </ul>
          </div>
        </div>
      )}
      
      <div className="export-options">
        <h3>Exporter le Rapport</h3>
        <div className="export-buttons">
          <button className="export-btn pdf">PDF</button>
          <button className="export-btn excel">Excel</button>
          <button className="export-btn csv">CSV</button>
        </div>
      </div>
    </div>
  );
};

export default Reports;